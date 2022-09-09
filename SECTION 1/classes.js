class Laptop{

    constructor (ram,hdd,cpu){
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    turnOn = () => {
        console.log('laptop turns on');
    }

    getCPU = () => {
        console.log('CPU is '+this.cpu);
    }

}

let lappy = new Laptop (4,500,'17');
lappy.turnOn();
lappy.getCPU();

let lappy2 = new Laptop (8,1000,'25');
lappy2.getCPU();
console.log(lappy2,ram);
console.log(lappy,ram);