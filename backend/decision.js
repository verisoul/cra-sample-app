/*
Decision samples
Coming Soon -> Decision samples based on:
- age estimation
- geographic location
- token owenership
- time expiring blocks
- etc.
 */

function onePersonOneAccount(account) {
    return account.numAccounts === 0;
}

function unlimitedAccountsUnlessBlocked(account) {
    return account.hasBlockedAccounts === false;
}

function onePersonThreeAccountsUnlessBlocked(account) {
    return account.numAccounts < 3 && account.hasBlockedAccounts === false;
}

function unlimitedAccountsUnlessBlockedInLastMonth(account) {
    let timeSinceBlock = Date.now() - Date.parse(account.lastBlockedAt);
    let diffDays = Math.ceil(timeSinceBlock / (1000 * 60 * 60 * 24));

    if (account.hasBlockedAccounts === true && diffDays > 30) {
        return false;
    }
    return true;
}

module.exports = {
    onePersonOneAccount,
    unlimitedAccountsUnlessBlocked,
    onePersonThreeAccountsUnlessBlocked,
    unlimitedAccountsUnlessBlockedInLastMonth
}