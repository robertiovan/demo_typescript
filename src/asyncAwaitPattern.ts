/* tslint:disable */

export class CallMe{

    constructor(){
    }

    public async getPhoneNumer():Promise<{pn:number}>{
        let p = new Promise<{pn:number}>((resolve, reject)=>{
            setTimeout(() => {
                resolve({pn:1234});
            }, 500); 
        });

        return p;
    }
}








