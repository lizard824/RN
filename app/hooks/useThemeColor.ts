/*
 * @Description:
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 1985-10-26 18:15:00
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-08 10:39:37
 * @FilePath: /app/hooks/useThemeColor.ts
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { Colors } from "@/constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
