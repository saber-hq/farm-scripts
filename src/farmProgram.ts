import type { AnchorTypes } from "@saberhq/anchor-contrib";

import type { FarmIDL } from "./farmIDL";

export * from "./farmIDL";

export type FarmTypes = AnchorTypes<
  FarmIDL,
  {
    landlord: Landlord;
    plot: Plot;
    farmer: Farmer;
  }
>;

type Accounts = FarmTypes["Accounts"];
export type Landlord = Accounts["Landlord"];
export type Plot = Accounts["Plot"];
export type Farmer = Accounts["Farmer"];

export type FarmError = FarmTypes["Error"];
export type FarmEvents = FarmTypes["Events"];
export type FarmProgram = FarmTypes["Program"];

export type ClaimEvent = FarmEvents["ClaimEvent"];
export type StakeEvent = FarmEvents["StakeEvent"];
export type WithdrawEvent = FarmEvents["WithdrawEvent"];
export type PlotRewardsUpdateEvent = FarmEvents["PlotRewardsUpdateEvent"];
