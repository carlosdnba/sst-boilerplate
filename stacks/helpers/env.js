export const vars = [
];

export function buildEnvVarObject (vars) {
  const output = {};
  vars.forEach((envVar) => {
    const varName = envVar;
    if (!process.env[varName]) return;
    output[varName] = process.env[varName];
  });
  return output;
}

export const defaultEnvs = ({ name, stage }) => ({
  DEBUG: `${name}:*`,
  PROJECT_NAME: name,
  STAGE: stage
});
