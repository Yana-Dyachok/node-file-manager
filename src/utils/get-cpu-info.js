import { EOL, cpus } from 'node:os';

const formatCpuData = (cpuInfo) => {
    return cpuInfo.map((info) => ({
        'CPU model': info.model,
        'CPU clock rate, GHz': `${(info.speed / 1000).toFixed(2)} GHz`,
    }));
};

export const getCPUInfo = async () => {
    const cpuInfo = cpus();
    const formattedCpuData = formatCpuData(cpuInfo);

    process.stdout.write(
        `Total CPU Cores: \x1b[35m${cpuInfo.length}\x1b[0m${EOL}`
    );
    console.table(formattedCpuData);
};
