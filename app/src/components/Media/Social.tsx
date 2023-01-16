import { styles } from "./Social.css";
import {FontIcon} from '@fluentui/react/lib/Icon'


export interface ISocialProps {
  tag: string;
  media: string[];
}

export const Social = (props: ISocialProps) => {
  const { tag, media } = props;
  console.log(media);
  return (
    <div className={styles.mediaContainer}>
      <div className={styles.username}>{tag}</div>
      <div className={styles.socialContainer}>
        {media.map((val, idx) => {
          return <FontIcon key={idx} className={styles.logo} iconName={val} />;
        })}
      </div>
    </div>
  );
};
