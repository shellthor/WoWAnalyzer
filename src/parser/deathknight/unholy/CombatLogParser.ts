import CoreCombatLogParser from 'parser/core/CombatLogParser';
import ArcaneTorrent from 'parser/shared/modules/racials/bloodelf/ArcaneTorrent';

import Abilities from './modules/features/Abilities';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import FesteringStrikeEfficiency from './modules/features/FesteringStrikeEfficiency';
import Checklist from './modules/features/checklist/Module';
import ScourgeStrikeEfficiency from './modules/features/ScourgeStrikeEfficiency';
import Apocalypse from './modules/features/Apocalypse';
import VirulentPlagueEfficiency from './modules/features/VirulentPlagueEfficiency';
import WoundTracker from './modules/features/WoundTracker';
import SpellUsable from './modules/features/SpellUsable'

import RunicPowerDetails from './modules/runicpower/RunicPowerDetails';
import RunicPowerTracker from './modules/runicpower/RunicPowerTracker';

import RuneTracker from './modules/features/RuneTracker';
import RuneDetails from '../shared/RuneDetails';

// Runes
import RuneOfTheFallenCrusader from '../shared/runeforges/RuneOfTheFallenCrusader';
import RuneOfHysteria from '../shared/runeforges/RuneOfHysteria';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Features
    abilities: Abilities,
    alwaysBeCasting: AlwaysBeCasting,
    cooldownThroughputTracker: CooldownThroughputTracker,
    festeringStrikeEfficiency: FesteringStrikeEfficiency,
    checklist: Checklist,
    scourgeStrikeEfficiency: ScourgeStrikeEfficiency,
  	apocalypse: Apocalypse,
    virulentPlagueEfficiency: VirulentPlagueEfficiency,
    woundTracker: WoundTracker,
    spellUsable: SpellUsable,

    // RunicPower
    runicPowerTracker: RunicPowerTracker,
    runicPowerDetails: RunicPowerDetails,

    //RuneTracker
    runeTracker: RuneTracker,
    runeDetails: RuneDetails,
    
    // Runes
    runeOfTheFallenCrusader: RuneOfTheFallenCrusader,
    runeOfHysteria: RuneOfHysteria,

    arcaneTorrent: [ArcaneTorrent, { castEfficiency: 0.5 }] as const,
  };
}

export default CombatLogParser;
