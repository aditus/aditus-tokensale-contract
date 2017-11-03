const AditusTokenSale = artifacts.require('./AditusTokenSale.sol');

contract('AditusTokenSale', accounts => {

  it('should have initial supply of 1,000,000,000 units assigned to funds wallet', async () => {
    const fundsWallet = accounts[1];
    const aditusToken = await AditusTokenSale.new(fundsWallet);

    const expectedSupply = 1000000000 * Math.pow(10, 18);
    
    const totalSupply = await aditusToken.totalSupply();
    assert.equal(totalSupply, expectedSupply, 'Total supply mismatch');
    
    const fundsWalletBalance = await aditusToken.balanceOf(fundsWallet);
    assert.equal(fundsWalletBalance.toNumber(), expectedSupply, 'Initial funds wallet balance mismatch');
  });
});
