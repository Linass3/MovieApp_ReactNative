import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index}: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className="w-32 relative pl-5">
                <View className="absolute bottom-0 px-2 py-1 rounded-full">
                    <Text className="text-white text-8xl font-extrabold">{index+1}</Text>
                </View>

                <Image
                    className="w-32 h-48 -right-8 rounded-lg"
                    source={{ uri: poster_url}}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        </Link>
    )
}
export default TrendingCard
