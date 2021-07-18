import { createContext, useEffect, useState, ReactNode} from 'react'
import { api } from './services/api';


interface TransactionProps{
    id: number; 
    title: string; 
    amount: number; 
    type: string; 
    category: string; 
    createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext =  createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}:TransactionsProviderProps){
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput){
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}} >
            {children}
        </TransactionsContext.Provider>
    )
}