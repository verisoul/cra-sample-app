import React, {useEffect, useState} from 'react';

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccounts().catch(console.error);
    }, []);

    const getAccounts = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/wallet-list`);
            if (!response.ok) {
                throw new Error(`Failed to get verified accounts: ${response.status}`);
            }

            const accounts = await response.json();
            setAccounts(accounts);
        } catch (err) {
            console.error(err);
        }
    }

    const makeTableHeader = () => {
        let keyList = Object.keys(accounts[0]);

        let headerRow = keyList.map((key, index) => {
            return <th key={index}>{key}</th>
        })
        headerRow.unshift(<th key={keyList.length}>{' '}</th>);

        return headerRow;
    }

    const makeTableRows = () => {
        let walletRows = accounts?.map((entry, index) => {
            return (
                <tr key={index}>
                    {mapEntryToRow(entry)}
                </tr>
            )
        });

        return walletRows;
    }

    const mapEntryToRow = (entry) => {
        let valueList = Object.values(entry);
        let row = Object.values(entry).map((value, index) => {
            return <td key={index}>{JSON.stringify(value)}</td>;
        })

        row.unshift(<td key={valueList.length}>
            <button onClick={() => toggleAccount(entry)}>
                {entry.isBlocked
                    ? 'Unblock'
                    : 'Block'}
            </button>
        </td>);
        return row;
    }

    const toggleAccount = async (account) => {
        try {
            const response = await fetch(`http://localhost:5001/api/account/${account.accountId}/toggle`);
            if (!response.ok) {
                throw new Error(`failed to get Verisoul session: ${response.status}`);
            }

            await getAccounts();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div style={{paddingTop: '40px'}}>
            {accounts && accounts?.length > 0
                ? <table className={'list'}>
                    <tbody>
                    <tr>
                        {makeTableHeader()}
                    </tr>
                    {makeTableRows()}
                    </tbody>
                </table>
                : null
            }
        </div>
    );
}

export default AccountList;
