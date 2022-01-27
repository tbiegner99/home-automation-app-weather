import FormTextArea from 'reactforms/src/form/elements/TextArea';
import TextInput from './TextInput';

class TextArea extends TextInput {
  get inputComponent() {
    return FormTextArea;
  }
}

export default TextArea;
