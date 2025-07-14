## Game Points Contract

A Soroban smart contract for managing player points in gaming applications on the Stellar blockchain. This contract implements an ownable pattern where only the contract owner can award points to players, while providing public functions for querying player information and rankings.

## Features

*   **Owner-Only Point Management**: Only the contract owner can add or reset player points
*   **Player Information Tracking**: Store and retrieve player scores with timestamps
*   **Game History**: Track individual game results with unique game IDs
*   **Player Count Management**: Automatically track the number of active players
*   **Leaderboard Support**: Foundation for implementing player rankings
*   **Event Emission**: Publishes events for important actions like point resets

## Contract Structure

### Data Types

#### `DataKey`

Enum defining storage keys for different data types:

*   `Owner`: Contract owner address
*   `Points(Address)`: Player point balances
*   `Player_count`: Total number of active players
*   `game_history(Address)`: Game history for specific players

#### `PlayerScore`

Structure containing player information:

```plaintext
pub struct PlayerScore {     
       		    pub player: Address, 
           		pub points: u64, 
           		pub game_id: u32,
          		pub timestamp: u64,
           }
```

#### `GameResult`

Structure for tracking individual game results:

```plaintext
pub struct GameResult {     
              pub player: Address,
              pub points_awarded: u64,  
              pub game_id: u32,   
              pub timestamp: u64
              }
```

## Functions

### Constructor

```plaintext
pub fn __constructor(env: &Env, owner: Address)
```

Initializes the contract with the specified owner address.

### Public Functions

#### `get_player_info(env: Env, player: Address) -> PlayerScore`

Returns complete player information including current points and timestamp.

#### `get_leaderboard(env: Env, limit: u32) -> Vec<PlayerScore>`

Returns a vector of player scores for leaderboard display. Currently returns an empty vector - requires implementation of indexing system for full functionality.

### Owner-Only Functions

#### `add_points(env: Env, player: Address, points: u64, game_id: u32) -> u64`

Adds points to a player's balance. Features:

*   Validates points are greater than 0
*   Updates player's total points
*   Increments player count for new players
*   Records game result in history
*   Returns new total points

#### `reset_player_points(env: Env, player: Address) -> u64`

Resets a player's points to zero. Features:

*   Removes player from storage
*   Decrements player count
*   Emits reset event
*   Returns previous point balance

### Internal Functions

#### `get_player_points(env: Env, player: Address) -> u64`

Internal function to retrieve a player's current point balance.

## Dependencies

*   `soroban_sdk`: Core Soroban SDK functionality
*   `stellar_default_impl_macro`: Macro for default implementations
*   `stellar_ownable`: Ownable pattern implementation
*   `stellar_ownable_macro`: Macro for owner-only function protection

## Usage Examples

### Deploy and Initialize

```plaintext
// Deploy contract with owner address 
let owner = Address::from_account(&env, &account_id); 
let contract = GamepointsContract::new(&env, owner);
```

### Add Points to Player

```plaintext
// Only owner can call this 
let player = Address::from_account(&env, &player_account); 
let new_total = contract.add_points(&env, player, 100, 1);
```

### Query Player Information

```plaintext
// Anyone can call this 
 let player_info = contract.get_player_info(&env, player); 
 println!("Player {} has {} points", player_info.player, player_info.points);
```

### Reset Player Points

```plaintext
// Only owner can call this 
let old_points = contract.reset_player_points(&env, player);
```

## Storage Design

The contract uses different storage types for optimal performance:

*   **Persistent Storage**: Player points and game history (long-term data)
*   **Instance Storage**: Player count (contract-level metadata)

## Events

The contract emits events for important actions:

*   `POINTS::RESET`: Emitted when a player's points are reset, containing player address and previous point balance

## Security Features

*   **Owner-Only Operations**: Critical functions are protected by the `#[only_owner]` macro
*   **Input Validation**: Points must be greater than 0
*   **Safe Arithmetic**: Uses checked arithmetic operations
*   **Data Integrity**: Maintains consistent player counts and history records