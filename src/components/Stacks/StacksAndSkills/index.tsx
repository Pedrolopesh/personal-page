import style from "./style.module.css";
import useStacksAndSkills from "./useStackAndSkills";
import { TbWorldCode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const StacksAndSkills = () => {
  const { internStacksAndSkills } = useStacksAndSkills();

  return (
    <div>
      <h2>StacksAndSkills</h2>

      <div className={style.stackGrid}>
        {internStacksAndSkills.map((stack, index) => {
          return (
            <div key={index} className={style.StackCard}>
              <div
                className={style.StackCardIcon}
                style={{
                  backgroundColor: stack.bgColor,
                }}
              >
                <div>
                  {stack.icon}
                  <h2>{stack.name}</h2>
                </div>
              </div>

              <div className={style.stackCardText}>
                <div>
                  <p>{stack.description}</p>
                  <div className={style.blockStackProjectLinks}>
                    <p>{stack.callForLink}</p>
                    <div className={style.containerExternalProjectLinks}>
                      {stack.projectLink && (
                        <a
                          href={stack.projectLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <TbWorldCode size={30} />
                        </a>
                      )}
                      {stack.githubLink && (
                        <a
                          href={stack.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub size={30} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StacksAndSkills;
