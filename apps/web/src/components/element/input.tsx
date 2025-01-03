"use client";
import { API_ENDPOINT } from "@/app/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

export const EmailInput = ({
  email,
  handleChange,
}: {
  email: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-full">
      <label htmlFor="email" className="text-sm font-bold text-gray-600">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleChange(e)}
        required
        className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export const TextInput = ({
  name,
  value,
  handleChange,
}: {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-sm font-bold text-gray-600">
        {name}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        placeholder={name}
        onChange={(e) => handleChange(e)}
        required
        className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export const PasswordInput = ({
  name,
  value,
  handleChange,
}: {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-full">
      <label htmlFor="password" className="text-sm font-bold text-gray-600">
        Password
      </label>
      <input
        type="password"
        name={name}
        value={value}
        placeholder="Password"
        onChange={(e) => handleChange(e)}
        required
        className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export const SearchInput = () => {
  const router = useRouter();

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        return;
      }
      router.push(`/search/${event.target.value}`);
    }
  };

  return (
    <input
      id="search-bar"
      className="border dark:bg-neutral-700 p-1 px-2 rounded-full border-zinc-900 bg-transparent w-96 sm:block hidden"
      placeholder="Search..."
      type="text"
      onKeyDown={handleKeyPress}
    />
  );
};

export const TagInput = ({
  id,
  initialTags,
}: {
  id: string;
  initialTags: string[];
}) => {
  const [tags, setTags] = useState<string[]>(initialTags || []);
  const removeTag = (index: number) => {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)]);
  };
  const addTag = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const newTag = event.currentTarget.value;
    if (tags.includes(newTag)) {
      setHighlightedTag(newTag); // Highlight the tag instead of adding it
      setTimeout(() => setHighlightedTag(""), 1500); // Reset highlightedTag after 3 seconds
      return;
    }
    setTags([...tags, event.currentTarget.value]);
    event.currentTarget.value = "";
  };

  const UpdateTags = async (tags: string[]) => {
    const csrf = Cookies.get("csrftoken");
    try {
      const res = await fetch(`${API_ENDPOINT.article.url}?slug=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": `${csrf}`,
        },
        body: JSON.stringify({ tags: tags }),
        credentials: "include",
      });
    } catch (error) {}
  };

  const [highlightedTag, setHighlightedTag] = useState<string | null>(null);

  useEffect(() => {
    UpdateTags(tags);
  }, [tags]);

  return (
    <div className="border rounded-md p-2 w-full flex">
      <div>
        <span className="dark:text-gray-600">Tags:</span>
      </div>
      <div className="">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            tag={tag}
            onClick={() => removeTag(index)}
            isHighlighted={tag === highlightedTag}
          />
        ))}
      </div>
      <input
        id="tag-bar"
        className="flex-grow bg-transparent"
        // placeholder="Tag..."
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTag(e);
          }
          if (e.key === "Backspace" && e.currentTarget.value === "") {
            setTags([...tags.slice(0, tags.length - 1)]);
          }

          if (e.key === " ") {
            addTag(e);
          }
        }}
      />
    </div>
  );
};

export const Tag = ({
  tag,
  onClick,
  isHighlighted = false,
}: {
  tag: string;
  onClick: () => void;
  isHighlighted?: boolean;
}) => {
  return (
    <span className="m-1 dark:bg-neutral-600 rounded p-1">
      <span className={`${isHighlighted ? "text-yellow-300" : ""}`}>{tag}</span>
      <img
        onClick={onClick}
        src="https://img.icons8.com/?size=100&id=9433&format=png&color=000000"
        alt=""
        className="h-4 inline hover:cursor-pointer hover:bg-gray-500 m-0.5 rounded-md"
      />
    </span>
  );
};

export const Input = (
  InputProp: React.InputHTMLAttributes<HTMLInputElement>
) => {
  
  return (
    <input
      {...InputProp}
      style={{
        padding: "0.5rem",
      }}
      className={`rounded-md ${InputProp.className || ""}`}
    />
  );
};
