import React from 'react';
import { Box, Link, Text, theme } from '../../../theme/components';

export function Footer({ description }) {
  const [password, setPassword] = React.useState('');
  let http = `/api/preview?password=${password}`

  return (
    <Box
      tag="footer"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x800,
      }}
    >
      <Box
        styleSheet={{
          overflow: "hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight: "auto",
          paddingVertical: theme.space.x8,
          paddingHorizontal: theme.space.x4,
        }}
      >
        <Text
          styleSheet={{
            justifyContent: "center",
            color: theme.colors.neutral.x000,
          }}
        >
          &copy; {new Date().getFullYear()} {description}
        </Text>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(event) =>  setPassword(event.target.value)} />
        {process.env.NODE_ENV !== "production" && (
          <Link href={http}>
            Toggle Preview Mode
          </Link>
        )}
      </Box>
    </Box>
  );
}
