import useStackAndSkills from "./useStackAndSkills";
import style from "./style.module.css";

const StackAndSkills = () => {
  const { stacksAndSkills, setIsHovered, isHovered } = useStackAndSkills();

  return (
    <div className={style.ContainerSectionStacks}>
      <h2>Stack and Skills</h2>
      <p>
        Clique na imagem de uma das tecnologias para entender como utilizei, em
        qual projeto e resultados da utilização
      </p>

      <div className={style.ContainerStacksAndSkills}>
        {stacksAndSkills.map((stack, index) => (
          <div
            className={style.BlockStack}
            key={index}
            style={{
              backgroundColor: `${stack.bgColor}`,
              boxShadow: isHovered ? `box-shadow: -5px 5px 10px #ffffff;` : ``,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {stack.icon}
            <h2>{stack.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackAndSkills;
