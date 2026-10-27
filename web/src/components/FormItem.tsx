import styled from "styled-components";

const FormItemWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  padding: 0.35rem 0;
  color: #0f172a;
`;

const Input = styled.input`
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0.65rem 0.75rem;
`;

type FormItemProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  handleOnChange: (value: string) => void;
};

export default function FormItem({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  handleOnChange,
}: FormItemProps) {
  return (
    <FormItemWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e.currentTarget.value)}
      />
    </FormItemWrapper>
  );
}
