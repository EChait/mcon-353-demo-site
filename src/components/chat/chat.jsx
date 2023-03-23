import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import {
  Select,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Popover,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState("");
  const [newChatroomName, setNewChatroomName] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);

        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);

        setMessages(data.Items);
      });
  }

  function postMessage() {
    if (currentChat != null) {
      const message = {
        chatId: currentChat.id,
        username: username,
        text: inputMessage,
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }

  function onMessageInput(event) {
    console.log(event);
    setInputMessage(event.target.value);
  }

  function onUsernameInput(event) {
    setUsername(event.target.value);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createChatroom = (name) => {
    const newChatroom = {
      name: name,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChatroom),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("new chatroom created:");
        console.log(data);

        setChats([...chats, data]);

        setNewChatroomName("");
      })
      .catch((error) => console.error("Error creating chatroom: ", error));
  };

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  return (
    <Box>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          bgcolor: "#ede7f6",
          border: "5px solid grey",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          sx={{
            color: "purple",
            fontFamily: "fantasy",
            textDecoration: "underline",
            marginBottom: "20px",
          }}
        >
          Chat:
        </Typography>
        <Box display="flex" alignItems="flex-start" justifyContent="center">
          <Box flexGrow={1} mr={3}>
            <Typography
              component="h3"
              variant="h6"
              align="left"
              sx={{
                color: "purple",
                fontFamily: "fantasy",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
            >
              Chats:{"                   "}
              <AddIcon
                aria-controls="new-chat"
                aria-haspopup="true"
                onClick={handleClick}
              />
              <Popover
                id="new-chat"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <div style={{ padding: 16 }}>
                  <TextField
                    label="Enter chat name"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={newChatroomName}
                    onChange={(event) => setNewChatroomName(event.target.value)}
                    sx={{
                      color: "black",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "purple",
                        },
                        "&:hover fieldset": {
                          borderColor: "purple",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "purple",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "purple",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => createChatroom(newChatroomName)}
                    sx={{
                      margin: "auto",
                      display: "block",
                      color: "black",
                      borderColor: "#6200EE",
                      borderWidth: "2px",
                      backgroundColor: "#ede7f6",
                      "&:hover": {
                        backgroundColor: "purple",
                      },
                    }}
                  >
                    Create
                  </Button>
                </div>
              </Popover>
            </Typography>
            <Select
              value={currentChat ? currentChat.id : ""}
              onChange={(event) =>
                setChat(chats.find((chat) => chat.id === event.target.value))
              }
              fullWidth
              sx={{
                marginBottom: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "purple",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "purple",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "purple",
                },
              }}
            >
              {chats.map((chat) => (
                <MenuItem key={chat.id} value={chat.id}>
                  {chat.name}
                </MenuItem>
              ))}
            </Select>

            <Box mt={4}></Box>
          </Box>
          <Box flexGrow={3} ml={3}>
            {currentChat && (
              <>
                <Typography
                  component="h3"
                  variant="h6"
                  align="left"
                  sx={{
                    color: "purple",
                    fontFamily: "fantasy",
                    textDecoration: "underline",
                    marginBottom: "10px",
                  }}
                >
                  {currentChat.name}
                </Typography>
                <Box
                  sx={{
                    border: "2px solid purple",
                    borderRadius: "10px",
                    minHeight: "500px",
                    padding: "10px",
                    overflowY: "scroll",
                  }}
                >
                  {messages.map((message) => (
                    <Box
                      key={message.id}
                      sx={{
                        backgroundColor:
                          message.username === username ? "#d3d3d3" : "#e1bee7",
                        borderRadius: "10px",
                        padding: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {message.username}:
                      </Typography>{" "}
                      {message.text}
                    </Box>
                  ))}
                </Box>
                <Box
                  mt={2}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <TextField
                    type="text"
                    placeholder="Your username"
                    value={username}
                    onChange={onUsernameInput}
                    sx={{
                      marginRight: "20px",
                      marginBottom: "10px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "purple",
                        },
                    }}
                  />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <TextField
                    type="text"
                    placeholder="Type a message..."
                    value={inputMessage}
                    onChange={onMessageInput}
                    sx={{
                      marginRight: "20px",
                      marginBottom: "10px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "purple",
                        },
                    }}
                  />
                  <Button
                    sx={{
                      borderColor: "#6200EE",
                      borderWidth: "2px",
                      backgroundColor: "purple",
                      "&:hover": {
                        backgroundColor: "purple",
                      },
                    }}
                    variant="contained"
                    color="primary"
                    onClick={postMessage}
                  >
                    Send
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
