import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const cli = path.resolve('bin/micro-ecf.mjs');
const packageVersion = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8')).version;

test('MCP reports the package version and confines Harness exports to the artifact root', async () => {
  const parent = await mkdtemp(path.join(os.tmpdir(), 'micro-ecf-mcp-contract-'));
  const artifactRoot = path.join(parent, 'artifacts');
  const escapedOutput = path.join(parent, 'escaped-harness.json');
  const requests = [
    { jsonrpc: '2.0', id: 1, method: 'initialize', params: {} },
    {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'micro_ecf.export_agent_os_harness',
        arguments: { output: '../escaped-harness.json' },
      },
    },
  ];

  try {
    const result = spawnSync(process.execPath, [cli, 'serve-mcp', '--root', artifactRoot], {
      cwd: process.cwd(),
      encoding: 'utf8',
      input: `${requests.map((request) => JSON.stringify(request)).join('\n')}\n`,
    });
    assert.equal(result.status, 0, result.stderr);
    const responses = result.stdout.trim().split(/\r?\n/).map((line) => JSON.parse(line));
    assert.equal(responses[0].result.serverInfo.version, packageVersion);
    assert.equal(responses[1].error.code, -32000);
    assert.match(responses[1].error.message, /must stay within/);
    await assert.rejects(stat(escapedOutput), { code: 'ENOENT' });
  } finally {
    await rm(parent, { recursive: true, force: true });
  }
});
