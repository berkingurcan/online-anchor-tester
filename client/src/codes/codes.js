import rTabs from '../utils/rTabs';

const codes = {
    1: rTabs(`
    use anchor_lang::prelude::*;

declare_id!("JDDoyUKwpogMt77Ysa3Fqm6QNVfegEzt88iFtD8Qzvsy");

#[program]
pub mod hello_world {
    use super::*;

    pub fn hello_world(ctx: Context<Initialize>) -> Result<()> {
        msg!("Hello world, from solana smart contract");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

    `),
    2: rTabs(`
    
    `),
    3: rTabs(`
   
    `),
    4: rTabs(`
    
    `)
}

export default codes