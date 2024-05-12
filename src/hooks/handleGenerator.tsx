import { transferData } from "@/hooks/FileTransfer";

interface Props {
  steps: HTMLElement;
  RecipeName: string;
  StartSequenceId: string;
  StartStepId: string;
}

//transferData({})
export const handleGenerator = ({ steps, RecipeName, StartSequenceId, StartStepId }: Props) => {

    let data: { [key: string]: string | number | object } = {}; 
    
    data['RecipeName'] = RecipeName;
    data['StartSequenceId'] = StartSequenceId;
    data['StartStepId'] = StartStepId;
    data['step'] = []


    let stepData: { [key: string]: string | number | object | boolean } = {}; 
  
    if (steps) {
      Array.from(steps.children).map((step) => {
        if (step.hasChildNodes()) {
          let transitions = [];
          let transition1: { [key: string]: string | number | object } = {};
          let transition2: { [key: string]: string | number | object }  = {};

          stepData['StepType'] = (step.children[0].children[0].children[0].children[0] as HTMLInputElement).value;
          stepData['StepId'] = (step.children[0].children[0].children[1].children[0].children[1].children[0] as HTMLInputElement).checked || (step.children[0].children[0].children[1].children[0].children[0] as HTMLInputElement).value;

          if (step.children[0].children[1].children.length > 1) {
            stepData['ExecuteFunction'] = (step.children[0].children[1].children[0].children[parseInt((step.children[0].children[1].children[0] as HTMLInputElement).value) + 1] as HTMLInputElement).innerHTML + '/' + (step.children[0].children[1].children[1] as HTMLInputElement).value;
          }

          const hrFunction1 = (step.children[0].children[2].children[0].children[0].children[0].children[1] as HTMLInputElement).checked ? 'Succeeded': 'Failed';
          const NextStepId1 = (step.children[0].children[2].children[0].children[0].children[1].children[0] as HTMLInputElement).value;
          
          transition1['hrFunction'] = hrFunction1;
          transition1['NextStepId'] = NextStepId1;

          transitions.push(transition1);

          if((step.children[0].children[2].children[0].children[1].children[1].children[0] as HTMLInputElement).value !== ''){
            const hrFunction2 = (step.children[0].children[2].children[0].children[1].children[0].children[1] as HTMLInputElement).checked ? 'Succeeded': 'Failed';
            const NextStepId2 = (step.children[0].children[2].children[0].children[1].children[1].children[0] as HTMLInputElement).value;

            transition2['hrFunction'] = hrFunction2;
            transition2['NextStepId'] = NextStepId2;

            transitions.push(transition2);
          }

          stepData['Transitions'] = transitions;

          transitions = [];
          transition1 = {};
          transition2 = {};
          stepData['Parameter'] = {};
          
          if (step.children[0].children[1].children.length > 1) {
           // stepData['Parameter'] = data.(step.children[0].children[1].children[0].children[parseInt((step.children[0].children[1].children[0] as HTMLInputElement).value) + 1] as HTMLInputElement).innerHTML.Functions.(step.children[0].children[1].children[1] as HTMLInputElement).value.FunctionDescription;
          }

          data['step'].push(stepData);
        }
      });
    }
    
    return data
};


