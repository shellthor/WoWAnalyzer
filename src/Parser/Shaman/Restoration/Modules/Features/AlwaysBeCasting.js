import SPELLS from 'common/SPELLS';
import { formatPercentage } from 'common/format';

import CoreAlwaysBeCastingHealing from 'Parser/Core/Modules/AlwaysBeCastingHealing';

const HEALING_ABILITIES_ON_GCD = [
  SPELLS.HEALING_WAVE.id,
  SPELLS.CHAIN_HEAL.id,
  SPELLS.HEALING_SURGE_RESTORATION.id,
  SPELLS.RIPTIDE.id,
  SPELLS.HEALING_RAIN_CAST.id,
  SPELLS.HEALING_STREAM_TOTEM_CAST.id,
  SPELLS.HEALING_TIDE_TOTEM_CAST.id,
  SPELLS.SPIRIT_LINK_TOTEM.id,
  SPELLS.WELLSPRING_TALENT.id,
  SPELLS.CLOUDBURST_TOTEM_TALENT.id,
  SPELLS.EARTHEN_WALL_TOTEM_TALENT.id,
  SPELLS.UNLEASH_LIFE_TALENT.id,
  SPELLS.EARTH_SHIELD_TALENT.id,
  SPELLS.DOWNPOUR_TALENT.id,
];

class AlwaysBeCasting extends CoreAlwaysBeCastingHealing {
  static HEALING_ABILITIES_ON_GCD = HEALING_ABILITIES_ON_GCD;

  suggestions(when) {
    const nonHealingTimeSuggestionThresholds = this.nonHealingTimeSuggestionThresholds;
    const deadTimePercentage = this.downtimeSuggestionThresholds;
    when(nonHealingTimeSuggestionThresholds.actual).isGreaterThan(nonHealingTimeSuggestionThresholds.isGreaterThan.minor)
      .addSuggestion((suggest, actual, recommended) =>
        suggest(`Your non healing time can be improved. Try to cast heals more regularly (${Math.round(nonHealingTimeSuggestionThresholds.actual * 100)}% non healing time).`)
          .icon('petbattle_health-down')
          .actual(`${formatPercentage(nonHealingTimeSuggestionThresholds.actual)}% non healing time`)
          .recommended(`<${formatPercentage(nonHealingTimeSuggestionThresholds.isGreaterThan.minor)}% is recommended`)
          .regular(nonHealingTimeSuggestionThresholds.isGreaterThan.average).major(nonHealingTimeSuggestionThresholds.isGreaterThan.major)
      );
    when(deadTimePercentage.actual).isGreaterThan(0.2)
      .addSuggestion((suggest, actual, recommended) =>
        suggest(`Your downtime can be improved. Try to Always Be Casting (ABC); when you're not healing try to contribute some damage.`)
          .icon('spell_mage_altertime')
          .actual(`${formatPercentage(deadTimePercentage.actual)}% downtime`)
          .recommended(`<${formatPercentage(deadTimePercentage.isGreaterThan.minor)}% is recommended`)
          .regular(deadTimePercentage.isGreaterThan.average).major(deadTimePercentage.isGreaterThan.major)
      );
  }
}

export default AlwaysBeCasting;
