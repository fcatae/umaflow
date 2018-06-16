import { workflow, code, getWorkflow } from './workflow'

console.log('hello world')

// sample code
workflow('wf1', () => {

    console.log('wf1 started');
    
    code('phase1', () => {
        console.log("atencao, tivemos um incidente {incId} no dia de hoje")
        console.log("tecle 1 para confirmar ciencia sobre o problema")
    });

    code('phase2', () => {
        console.log("atencao novamente")
        console.log("tecle 2")
    });

}, 1000)

// phase 1: initialize
var wf1 = getWorkflow('wf1');
wf1.init();
wf1.exec();