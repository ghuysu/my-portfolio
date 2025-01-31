import { useEffect, useRef, useCallback, useContext } from 'react';
import { AnimationBarsProps } from '../interface';
import gsap from 'gsap';
import { PathContext } from '../stores/path-context';
import { createPortal } from 'react-dom';
const AnimationBars: React.FC<AnimationBarsProps> = ({
  loading,
  setLoading,
}) => {
  const { path } = useContext(PathContext);

  // References for the bars
  const firstBar = useRef<HTMLDivElement>(null);
  const secondBar = useRef<HTMLDivElement>(null);
  const thirdBar = useRef<HTMLDivElement>(null);
  const fourthBar = useRef<HTMLDivElement>(null);
  const fifthBar = useRef<HTMLDivElement>(null);

  const animationFunc = useCallback(() => {
    setLoading(true);
    const bars = [
      firstBar.current,
      secondBar.current,
      thirdBar.current,
      fourthBar.current,
      fifthBar.current,
    ];

    const timeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    bars.forEach((bar, index) => {
      timeline.fromTo(
        bar,
        { y: '-100%' },
        { y: '100%', duration: 0.5, ease: 'power2.inOut' },
        index * 0.05,
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    animationFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return createPortal(
    <div
      className={`${!loading && 'hidden'} flex h-screen fixed inset-0`}
    >
      <div ref={firstBar} className="flex-1 bg-[#f30716]"></div>
      <div ref={secondBar} className="flex-1 bg-main_red"></div>
      <div ref={thirdBar} className="flex-1 bg-[#ce0612]"></div>
      <div ref={fourthBar} className="flex-1 bg-[#a60711]"></div>
      <div ref={fifthBar} className="flex-1 bg-[#85050d]"></div>
    </div>
  , document.getElementById('sub-root') as HTMLElement);
};

export default AnimationBars;
