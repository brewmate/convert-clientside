export interface Recipe {
  name: string;
  version: number;
  notes: string;
  type: string;
  brewer: string;
  asstBrewer: string;
  batchSize: number;
  boilSize: number;
  boilTime: number;
  efficiency: number;
  hops: Hop[];
  fermentables: Fermentable[];
  miscs: Misc[];
  waters: Water[];
  style: Style;
  equipment: Equipment;
  mash: Mash;
  tasteNotes: string;
  tasteRating: number;
  og: number;
  fg: number;
  carbonation: number;
  fermentationStages: number;
  primaryAge: number;
  primaryTemp: number;
  secondaryAge: number;
  secondaryTemp: number;
  tertiaryAge: number;
  age: number;
  ageTemp: number;
  carbonationUsed: string;
  forcedCarbonation: boolean;
  primingSugarName: string;
  primingSugarEquiv: number;
  kegPrimingFactor: number;
  carbonationTemp: number;
  displayCarbTemp: string;
  date: string;
  estOg: string;
  estFg: string;
  estColor: string;
  ibu: string;
  ibuMethod: string;
  estAbv: string;
  abv: string;
  actualEfficiency: string;
  calories: string;
  displayBatchSize?: string;
  displayBoilSize?: string;
  displayOg?: string;
  displayFg?: string;
  displayPrimaryTemp?: string;
  displaySecondaryTemp?: string;
  displayTertiaryTemp?: string;
  displayAgeTemp?: string;
}

export interface Hop {
  name: string;
  version: number;
  notes: string;
  origin: string;
  alpha: number;
  amount: number;
  use: string;
  time: number;
  type: string;
  form: string;
  beta: number;
  hsi: number;
  displayAmount: string;
  inventory: string;
  displayTime: string;
}

export interface Fermentable {
  name: string;
  version: number;
  notes: string;
  type: string;
  amount: number;
  yield: number;
  color: number;
  addAfterBoil: boolean;
  origin: string;
  supplier: string;
  coarseFineDiff: number;
  moisture: number;
  diastaticPower: number;
  protein: number;
  maxInBatch: number;
  recommendMash: boolean;
  ibuGalPerLb: number;
  displayAmount: string;
  inventory: string;
  potential: number;
  displayColor: string;
  extractSubstitute: string;
}

export interface Misc {
  name: string;
  version: number;
  notes: string;
  type: string;
  use: string;
  amount: number;
  time: number; // minutes
  amountIsWeight: boolean;
  useFor: string;
  displayAmount: string;
  inventory: string;
  displayTime: string;
  batchSize: string;
}

export interface Water {
  name: string;
  version: number;
  notes: string;
  amount: number;
  calcium: number;
  bicarbonate: number;
  sulfate: number;
  chloride: number;
  sodium: number;
  magnesium: number;
  ph: number;
}

export interface Style {
  name: string;
  version: number;
  notes: string;
  category: string;
  categoryNumber: number;
  styleLetter: string;
  styleGuide: string;
  type: string;
  ogMin: number;
  ogMax: number;
  fgMin: number;
  fgMax: number;
  ibuMin: number;
  ibuMax: number;
  colorMin: number;
  colorMax: number;
  carbMin: number;
  carbMax: number;
  abvMax: number;
  abvMin: number;
  profile: string;
  ingredients: string;
  examples: string;
  displayOgMin: string;
  displayOgMax: string;
  displayFgMin: string;
  displayFgMax: string;
  displayColorMin: string;
  displayColorMax: string;
  ogRange: string;
  fgRange: string;
  ibuRange: string;
  carbRange: string;
  colorRange: string;
  abvRange: string;
}

export interface Equipment {
  name: string;
  version: number;
  notes: string;
  boilSize: number;
  batchSize: number;
  tunVolume: number;
  tunWeight: number;
  tunSpecificHeat: number;
  topUpWater: number;
  trubChillerLoss: number;
  evapRate: number;
  boilTime: number;
  calcBoilVolume: boolean;
  lauterDeadspace: number;
  topUpKettle: number;
  hopUtilization: number;
  coolingLossPct: number;
  displayBoilSize: string;
  displayBatchSize: string;
  displayTunVolume: string;
  displayTunWeight: string;
  displayTopUpWater: string;
  displayTrubChillerLoss: string;
  displayLauterDeadspace: string;
  displayTopUpKettle: string;
}

export interface Mash {
  name: string;
  version: number;
  notes: string;
  grainTemp: number;
  tunTemp: number;
  spargeTemp: number;
  ph: number;
  tunWeight: number;
  tunSpecificHeat: number;
  equipAdjust: boolean;
  displayGrainTemp: string;
  displayTunTemp: string;
  displaySpargeTemp: string;
  displayTunWeight: string;
  mashSteps: MashStep[];
}

export interface MashStep {
  name: string;
  version: number;
  description: string;
  type: string;
  infuseAmount: number;
  stepTime: number;
  stepTemp: number;
  rampTime: number;
  endTemp: number;
  waterGrainRatio: string;
  decoctionAmt: string;
  infuseTemp: string;
  displayStepTemp: string;
  displayInfuseAmt: string;
}
