import { Circle, Layout, Rect } from '@motion-canvas/2d/lib/components';
import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { all } from '@motion-canvas/core/lib/flow';
import { createRef } from '@motion-canvas/core/lib/utils';

const RED = '#ff6470';

export default makeScene2D(function* (view) {
  const colA = createRef<Layout>();
  const colB = createRef<Layout>();
  const rowA = createRef<Layout>();

  view.add(
    <>
      <Layout layout gap={10} padding={10} width={440} height={240}>
        <Rect ref={colA} grow={1} fill={'#242424'} radius={4} />
        <Layout gap={10} direction="column" grow={3}>
          <Rect ref={rowA} grow={8} fill={RED} radius={4} stroke={'#fff'} lineWidth={4} margin={2}>
            <Circle layout={false} width={20} height={20} fill={'#fff'} />
          </Rect>
          <Rect grow={2} fill={'#242424'} radius={4} />
        </Layout>
        <Rect ref={colB} grow={3} fill={'#242424'} radius={4} />
      </Layout>
    </>
  );

  yield* all(colB().grow(1, 0.8), colA().grow(2, 0.8));
  yield* rowA().grow(1, 0.8);
  yield* all(colB().grow(3, 0.8), colA().grow(1, 0.8));
  yield* rowA().grow(8, 0.8);
});
