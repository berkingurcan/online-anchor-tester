import rTabs from '../utils/rTabs';

const answers = {
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
    use anchor_lang::prelude::*;

    declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

    #[program]
    mod hello_anchor {
        use super::*;
        pub fn set_data(ctx: Context<SetData>, data: u64) -> Result<()> {
            ctx.accounts.my_account.data = data;
            Ok(())
        }
    }

    #[account]
    #[derive(Default)]
    pub struct MyAccount {
        data: u64
    }

    #[derive(Accounts)]
    pub struct SetData<'info> {
        #[account(mut)]
        pub my_account: Account<'info, MyAccount>
    }
    
    `),
    3: rTabs(`
   
    `),
    4: rTabs(`
    
    `)
}

export default answers