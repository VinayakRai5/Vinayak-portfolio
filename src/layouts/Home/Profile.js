import profileImgPlaceholder from 'assets/profile-placeholder.jpg';

import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import myImage from 'assets/profpic.jpg';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
  I&apos;m Vinayak, a versatile full stack web developer and designer pursuing a degree in Data Science and AI at{' '}
  <Link href="https://iiitdwd.ac.in/">Indian Institute of Information Technology Dharwad</Link>. 
  With expertise in the MERN stack and a keen eye for design, I craft seamless web experiences. 
  My passion extends to AI, specializing in machine learning, computer vision, and NLP.
</Text>
<Text className={styles.description} data-visible={visible} size="l" as="p">
  I&apos;ve completed four internships, <span style={{ fontWeight: 'bold' }}>published two research papers</span> in  
  <Link href="https://2024.tale-conference.org/"> IEEE TALE 2024</Link> and 
  <Link href="https://etsociety.org/t4e2024/"> T4E 2024</Link>, and was selected for the{' '}
  <Link href="https://xathon.mettl.com/event/amazonmlsummerschool">Amazon Machine Learning Summer School &apos;24. </Link> 
  My research spans speaker diarization and metacognitive regulation in learning environments. 
  As <span style={{ fontWeight: 'bold' }}>Tech Team Lead</span> for our DS&AI Society, 
  I&apos;ve led projects from online platforms for the specially abled to AI-powered attention tracking systems and energy-efficient 3D CNN architectures for lung cancer nodule analysis.
</Text>
<Text className={styles.description} data-visible={visible} size="l" as="p">
Proficient in Python, TensorFlow, PyTorch, and big data technologies, I&apos;m adept at developing AI solutions and optimizing deep learning models for real-world applications with a focus on energy efficiency and practical impact. My skills extend to full stack web development, where I create dynamic, seamless experiences. Always eager to learn, I thrive in fast-paced environments, pushing the boundaries of AI, data science, and web development.

</Text>

  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[myImage, myImage]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  {/* <use href={`${profileKatakana}#katakana-profile`} /> */}
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
