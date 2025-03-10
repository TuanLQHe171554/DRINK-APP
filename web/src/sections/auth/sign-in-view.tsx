import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';
import { Iconify } from 'src/components/iconify';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUserAPI } from 'src/redux/user/userSlice';
import { AppDispatch } from 'src/redux/store';
import { USER_ROLES } from 'src/utils/constant';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface SignInFormInputs {
  email: string;
  password: string;
}

export function SignInView() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const handleSignIn = (data: SignInFormInputs) => {
    const { email, password } = data;

    dispatch(loginUserAPI({ email, password, admin: true }))
      .then(() => {
        navigate('/',)
      })
  };

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Sign in</Typography>
        <Typography variant="body2" color="text.secondary">
          Enter your credentials to continue
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <form onSubmit={handleSubmit(handleSignIn)}>
          <TextField
            fullWidth
            label="Email address"
            placeholder="Enter email address"
            InputLabelProps={{ shrink: true }}
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 3 }}
          />



          <TextField
            fullWidth
            label="Password"
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            InputLabelProps={{ shrink: true }}
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? "solar:eye-bold" : "solar:eye-closed-bold"} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
          <Link variant="body2" color="inherit" sx={{ mb: 1.5, display: "flex", justifyContent: "flex-end" }}>
            Forgot password?
          </Link>
          <LoadingButton fullWidth size="large" type="submit" color="inherit" variant="contained">
            Sign in
          </LoadingButton>
        </form>
      </Box>

      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
        >
          OR
        </Typography>
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <IconButton color="inherit">
          <Iconify icon="logos:google-icon" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="eva:github-fill" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="ri:twitter-x-fill" />
        </IconButton>
      </Box>
    </>
  );
}
