import { AccountCircle } from '@mui/icons-material';
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import flower from '../../img/flower.jpg';
import LockIcon from '@mui/icons-material/Lock';
import { loginStyle } from './loginStyle';
import Image from 'next/image';

const Login = () => (
  <Box sx={loginStyle.loginBox}>
    {/* <img src={flower} alt="haeju's plant" width="400px" /> */}
    <Image src={flower} alt="haeju plant" width={400} />
    <Box sx={loginStyle.loginField}>
      <Typography variant="h4" sx={{ pb: 3 }} color="#617d63">
        Login
      </Typography>
      <TextField
        id="input-ID"
        label="ID"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle sx={{ color: '#dc8490' }} />
            </InputAdornment>
          ),
        }}
        sx={{ width: '300px', mb: 1 }}
        variant="standard"
      />
      <TextField
        id="input-password"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon sx={{ color: '#dc8490' }} />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={loginStyle.btns}>
        <Button variant="contained" sx={{ mr: 1, color: 'white' }}>
          Login
        </Button>
        <Button variant="contained" sx={{ color: 'white' }}>
          Register
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Login;
