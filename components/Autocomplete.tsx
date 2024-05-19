"use client";
import {
  Autocomplete as AutocompleteBase,
  AutocompleteItem,
} from "@nextui-org/autocomplete";

import { Search01Icon } from "hugeicons-react";

interface AutocompleteProps {
  items: { label: string; id: string }[];
  isLoading: boolean;
  onSelectionChange: ((key: any) => void) | undefined;
  onInputChange: ((value: string) => void) | undefined;
  placeholder: string;
  emptyContent: string;
}

export const Autocomplete = ({
  items,
  isLoading,
  onSelectionChange,
  onInputChange,
  placeholder,
  emptyContent,
}: AutocompleteProps) => {
  return (
    <AutocompleteBase
      items={items}
      isLoading={isLoading}
      placeholder={placeholder}
      className="w-[350px] md:w-[500px]"
      autoFocus={true}
      aria-label={placeholder}
      listboxProps={{
        emptyContent,
      }}
      allowsEmptyCollection={true}
      onSelectionChange={onSelectionChange}
      menuTrigger="input"
      startContent={
        <Search01Icon className="text-white" strokeWidth={2.5} size={20} />
      }
      inputProps={{
        classNames: {
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        },
      }}
      onInputChange={onInputChange}
    >
      {(item) => (
        <AutocompleteItem key={item.id}>{item.label}</AutocompleteItem>
      )}
    </AutocompleteBase>
  );
};
