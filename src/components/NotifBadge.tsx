import styled from "styled-components/native";

export default ({ quantity }: NotifBagdeProps) => {
  return (
    <Badge>
      <BagdeText>{quantity}+</BagdeText>
    </Badge>
  );
};

const Badge = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f00;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const BagdeText = styled.Text`
  color: #eee;
  font-weight: 500;
  font-size: ${props => 14 + props.theme.fontSize}px;
`;
