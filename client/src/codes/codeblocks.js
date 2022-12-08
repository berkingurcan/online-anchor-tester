import rTabs from '../utils/rTabs';

const codeBlocks = {
    1: rTabs(`
    msg!("Hello world, from solana smart contract");
    `),
    2: rTabs(`
    pub struct MyAccount {
        data: u64
    }
    `),
    3: rTabs(`
    #[account(mut)]
    pub my_account: Account<'info, MyAccount>
    `),
    4: rTabs(`
    ctx.accounts.my_account.data = data;
    `),
    5: rTabs(`
    `),
    6: rTabs(`
   
    `)
   
}

export default codeBlocks