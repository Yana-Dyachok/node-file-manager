import {EOL, cpus} from 'node:os';

export const getCPUInfo = () => {
    const cpusInfo = cpus();
    const totalCores = `Total CPU Cores: ${cpusInfo.length}${EOL}`;
    
    const cpuDetails =  cpusInfo.map((cpu, index) => {
      const model = cpu.model.trim();
      const clockRate = (cpu.speed / 1000).toFixed(1);
      return `Core ${index + 1}:\n  Model: ${model}\n  Clock Rate: ${clockRate} GHz${EOL}`;
    }).join(EOL);
    
    return `${totalCores}${cpuDetails}`;
  };