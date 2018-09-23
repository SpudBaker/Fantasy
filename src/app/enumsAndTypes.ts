/*Will be imported into Globals from where references should be made*/

export enum PlayerStatus {
    LoggedOut = 'Logged Out',
    NotEnteredLeague = 'Not Entered League',
    BiddingForInitialSquad = 'Bidding for Initial Squad',
    BiddingForInitialSquadInProgress = 'Bidding for Initial Squad in Progress',
    Transfer = 'Transfer',
    TransferCalculationInProgress = 'Transfer Calculation in Progress',
    TeamSelection = 'Team Selection',
    MatchesInProgress = 'Matches in Progress',
    LeagueCompleted = 'League Completed'
}
