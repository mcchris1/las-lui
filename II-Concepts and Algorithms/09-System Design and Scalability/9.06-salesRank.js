/*
A large eCommerce company wishes to list the best-selling products, overall and by category. For example, one product might be the #1056th best-selling product overall but the #13th best-selling product under "Sports Equipment" and the #24th best-selling product under "Safety." Describe how you would design this system.

Hints:
#142: First, start with making some assumptions. What do and don't you have to build?
#158: We've assumed that the rest of the eCommerce system is already handled, and we just need to deal with the analytics part of sales rank. We can get notified somehow when a purchase occurs.
#176: Think about what sort of expectations on freshness and accuracy of data is expected. Does the data always need to be 100% up to date? Is the accuracy of some products more important than others?
#189: Purchases will occur very frequently. You probably want to limit database writes.
#208: You also want to limit joins because they can be very expensive.
#223: Don't forget that a product can be listed under multiple categories.
#236: Where would it be appropriate to cache data or queue up tasks?
#244: Depending on what assumptions you made, you might even be able to do without a database at all. What would this mean? Would it be a good idea?
*/
