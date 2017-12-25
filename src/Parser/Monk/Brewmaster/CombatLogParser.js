import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import DamageDone from 'Parser/Core/Modules/DamageDone';
// Core
import HealingDone from './Modules/Core/HealingDone';
import DamageTaken from './Modules/Core/DamageTaken';
import HealingReceived from './Modules/Core/HealingReceived';
import Stagger from './Modules/Core/Stagger';
import BrewCDR from './Modules/Core/BrewCDR';
// Spells
import IronSkinBrew from './Modules/Spells/IronSkinBrew';
import BlackoutCombo from './Modules/Spells/BlackoutCombo';
// Features
import Checklist from './Modules/Features/Checklist';
import Abilities from './Modules/Features/Abilities';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
// Items
import T20_2pc from './Modules/Items/T20_2pc';
import T20_4pc from './Modules/Items/T20_4pc';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Core
    healingDone: [HealingDone, { showStatistic: true }],
    healingReceived: HealingReceived,
    damageTaken: [DamageTaken, { showStatistic: true }],
    stagger: Stagger,
    damageDone: [DamageDone, { showStatistic: true }],
    brewCdr: BrewCDR,

    // Features
    checklist: Checklist,
    alwaysBeCasting: AlwaysBeCasting,
    abilities: Abilities,

    // Spells
    ironSkinBrew: IronSkinBrew,
    blackoutCombo: BlackoutCombo,

    // Items
    t20_2pc: T20_2pc,
    t20_4pc: T20_4pc,
  };
}

export default CombatLogParser;
