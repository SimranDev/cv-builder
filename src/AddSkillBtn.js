import styled from "styled-components";

const AddSkill = () => {
  return <AddSkillBtn>Add Skill max:14</AddSkillBtn>;
};

export default AddSkill;

const AddSkillBtn = styled.button`
  position: fixed;
  left: 30px;
  bottom: 30px;
  height: 40px;
  color: white;
  /* width: 60px; */
  /* border-radius: 50%; */
  border-width: 0;
  /* outline: none; */
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;

  :active {
    bottom: 29px;
  }
`;
