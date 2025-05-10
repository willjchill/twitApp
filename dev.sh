# Name of the tmux session
SESSION_NAME="dev_build"

# Paths to your Node.js servers
SERVER1_PATH="~/twitApp/client/"
SERVER2_PATH="~/twitApp/database/database.js"

# Start a new tmux session in detached mode
tmux new-session -d -s $SESSION_NAME

# Run first Node.js server in the first panel
tmux send-keys -t $SESSION_NAME "cd $SERVER1_PATH && npm run dev" C-m

# Split the window horizontally
tmux split-window -h -t $SESSION_NAME

# Run second Node.js server in the second panel
tmux send-keys -t $SESSION_NAME:0.1 "node $SERVER2_PATH" C-m

# Attach to the session
tmux attach -t $SESSION_NAME
