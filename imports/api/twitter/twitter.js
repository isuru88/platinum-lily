import { Mongo } from 'meteor/mongo';

export const Tweets = new Mongo.Collection("tweets");
export const TweetNotifications = new Mongo.Collection("tweet_notifications");
