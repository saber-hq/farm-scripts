import { Program, Wallet } from "@project-serum/anchor";
import { SolanaProvider } from "@saberhq/solana-contrib";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { mapValues } from "lodash";
import { FarmJSON } from "./farmIDL";
import { Farmer, Plot } from "./farmProgram";

interface PlotResp {
  dailyRewardsRate: string;
  rewardsShare: string;
  famineTs: string;
  landlordKey: string;
  tokenMintKey: string;
  tokenMintDecimals: string;
  lastUpdateTs: string;
  rewardsPerTokenStored: string;
  totalTokensDeposited: string;
  key: string;
}

interface FarmerResp {
  authority: string;
  plotKey: string;
  tokenVaultKey: string;
  wagesEarned: string;
  wagesPerTokenPaid: string;
  key: string;
}

export const getFarmers = async (): Promise<{
  plots: PlotResp[];
  farmers: FarmerResp[];
}> => {
  const connection = new Connection(
    "https://solana-api.projectserum.com/",
    "recent"
  );
  const provider = new SolanaProvider(
    connection,
    connection,
    new Wallet(Keypair.generate()),
    {}
  );
  const farm = new Program(
    FarmJSON,
    new PublicKey("FARM1U7g8p6XG18m3P25Rnb1RPVQZt2sC4ax35CyJzyc")
  );

  const plotAccounts = await connection.getProgramAccounts(farm.programId, {
    filters: [
      {
        dataSize: 122,
      },
    ],
  });
  const plots = plotAccounts.map(({ pubkey, account }) => {
    const result = farm.coder.accounts.decode<Plot>("Plot", account.data);
    return {
      key: pubkey,
      data: result,
    };
  });

  const farmerAccounts = await connection.getProgramAccounts(farm.programId, {
    filters: [
      {
        dataSize: 121,
      },
    ],
  });

  const farmers = farmerAccounts.map(({ pubkey, account }) => {
    const result = farm.coder.accounts.decode<Farmer>("Farmer", account.data);
    return {
      key: pubkey,
      data: result,
    };
  });

  return {
    plots: plots.map((plot) => ({
      key: plot.key.toString(),
      ...mapValues(plot.data, (v) => v.toString()),
    })),
    farmers: farmers.map((farm) => ({
      key: farm.key.toString(),
      ...mapValues(farm.data, (v) => v.toString()),
    })),
  };
};
