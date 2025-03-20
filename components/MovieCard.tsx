import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const MovieCard = ({ id, poster_path, title, vote_average, release_date}: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />

                <Text
                    className="text-sm font-bold text-white mt-2"
                    numberOfLines={1}
                >{title}</Text>

                <View className="flex-row items-center justify-start gap-x-1">
                    <Image source={icons.star} className="size-4" />

                    <Text className="text-white text-xs font-bold uppercase">{vote_average.toFixed(1)}</Text>
                </View>

                <View className="flex-row items-center justify-between gap-x-1">
                    <Text className="text-light-300 text-xs font-medium mt-1">{release_date?.split('-')[0]}</Text>

                    <Text className="text-light-300 text-xs font-medium uppercase">Movie</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}
export default MovieCard
