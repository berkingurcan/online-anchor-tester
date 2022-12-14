import rTabs from '../utils/rTabs';

const codes = {
    1: rTabs(`
    use anchor_lang::prelude::*;

    declare_id!("JDDoyUKwpogMt77Ysa3Fqm6QNVfegEzt88iFtD8Qzvsy");

    #[program]
    pub mod hello_world {
        use super::*;

        pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
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
            Ok(())
        }
    }

    #[account]
    #[derive(Default)]
    pub struct MyAccount {

    }

    #[derive(Accounts)]
    pub struct SetData<'info> {
        
    }
    
    `),
    3: rTabs(`
   
    `),
    4: rTabs(`
    
    `)
}

export default codes