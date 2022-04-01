import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Test4 } from "../target/types/test4";

describe("test4", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Test4 as Program<Test4>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
