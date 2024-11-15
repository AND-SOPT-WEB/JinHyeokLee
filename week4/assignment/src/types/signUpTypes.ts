interface Input {
  type: string;
  placeholder: string;
  name: string;
}

export interface StepInfo {
  subtitle: string;
  inputs: Input[];
  buttonText: string;
}
