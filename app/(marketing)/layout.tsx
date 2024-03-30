const MarketingLayout = ({children} : {children  : React.ReactNode}) =>{
    return ( 
        <div className="min-h-screen bg-indigo-100 flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center">
                {children}
            </main>
        </div>
    )
}
export default MarketingLayout