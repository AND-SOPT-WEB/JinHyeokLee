import { StepInfo } from 'src/types/signUpTypes';

const STEPS_CONFIG: StepInfo[] = [
  {
    subtitle: '이름',
    inputs: [
      {
        type: 'text',
        placeholder: '이름을 입력하세요',
        name: 'username',
      },
    ],
    buttonText: '다음',
  },

  {
    subtitle: '비밀번호',
    inputs: [
      {
        type: 'password',
        placeholder: '비밀번호를 입력하세요',
        name: 'password',
      },
      {
        type: 'password',
        placeholder: '비밀번호를 다시 입력하세요',
        name: 'passwordConfirm',
      },
    ],
    buttonText: '다음',
  },

  {
    subtitle: '취미',
    inputs: [
      {
        type: 'text',
        placeholder: '취미를 입력하세요',
        name: 'hobby',
      },
    ],
    buttonText: '회원가입',
  },
];

export default STEPS_CONFIG;
