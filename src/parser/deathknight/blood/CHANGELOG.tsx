import React from 'react';

import { joshinator, Yajinni, Zeboot, LeoZhekov } from 'CONTRIBUTORS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import { change, date } from 'common/changelog';

export default [
  change(date(2020, 11, 6), 'Runeforge-suggestions', joshinator),
  change(date(2020, 10, 27), <>Created statistics for <SpellLink id={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id} /> and <SpellLink id={SPELLS.RUNE_OF_HYSTERIA.id} /></>, joshinator),
  change(date(2020, 10, 26), <>Replaced deprecated StatisticBox modules for talents, disable Ossuary until SL and new <SpellLink id={SPELLS.RELISH_IN_BLOOD_TALENT.id} /> module</>, joshinator),
  change(date(2020, 10, 20), 'Replaced the deprecated StatisticBox modules', LeoZhekov),
  change(date(2020, 10, 18), 'Converted legacy listeners to new event filters', Zeboot),
  change(date(2020, 9, 10), <>Changed <SpellLink id={SPELLS.OSSUARY.id} /> from a talent to baseline. Changed <SpellLink id={SPELLS.BLOOD_TAP_TALENT.id} /> to talent.</>, [Yajinni]),
  change(date(2020, 9, 9), <>Initial clean up and adding of spells for prepatch.</>, [Yajinni]),
  change(date(2019, 6, 10), <>Fixed an issue with <SpellLink id={SPELLS.BONESTORM_TALENT.id} /> not counting damage properly.</>, [joshinator]),
  change(date(2019, 12, 4), <>Fixed an issue for some logs where <SpellLink id={SPELLS.BONE_SHIELD.id} /> wouldn't be counted properly, resulting in wrong bad <SpellLink id={SPELLS.MARROWREND.id} />-metrics</>, [joshinator]),
  change(date(2019, 2, 14), <>Updated <SpellLink id={SPELLS.BONE_SHIELD.id} />-suggestion to account for different types of bad <SpellLink id={SPELLS.MARROWREND.id} />s</>, [joshinator]),
  change(date(2019, 2, 3), <>Added <SpellLink id={SPELLS.BLOODY_RUNEBLADE.id} /> azerite trait and marked patch 8.1 compatible.</>, [Yajinni]),
  change(date(2018, 11, 30), <>Readd the checklist, make <SpellLink id={SPELLS.OSSUARY.id} />-suggestion based on <SpellLink id={SPELLS.DEATH_STRIKE.id} /> casts without <SpellLink id={SPELLS.OSSUARY.id} />.</>, [joshinator]),
  change(date(2018, 11, 6), <>Updated the <SpellLink id={SPELLS.DEATHS_CARESS.id} />-usage module to check more accurately if a cast was bad or not (by checking available ranged spells and the distance between the player and the enemy).</>, [joshinator]),
  change(date(2018, 9, 28), <>Updated the <SpellLink id={SPELLS.MARROWREND.id} />-usage module to account for <SpellLink id={SPELLS.BONES_OF_THE_DAMNED.id} /> and updated <SpellLink id={SPELLS.HEARTBREAKER_TALENT.id} />-Module.</>, [joshinator]),
  change(date(2018, 8, 3), <>Added <SpellLink id={SPELLS.BONE_SPIKE_GRAVEYARD.id} />-Module.</>, [joshinator]),
  change(date(2018, 8, 1), <>Added <SpellLink id={SPELLS.BONES_OF_THE_DAMNED.id} />-Module.</>, [joshinator]),
  change(date(2018, 7, 19), <>Updated <SpellLink id={SPELLS.FOUL_BULWARK_TALENT.id} /> to its new reduced value.</>, [Yajinni]),
  change(date(2018, 7, 18), <>Removed old legion traits/talents/abilities.</>, [Yajinni]),
];
