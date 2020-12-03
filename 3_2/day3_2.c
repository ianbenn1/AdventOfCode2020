#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    FILE *fp;
    fp = fopen("input.txt", "r");
    fseek(fp, 0L, SEEK_END);
    int fileSize = ftell(fp);
    rewind(fp);

    char fileContents[fileSize];

    fread(fileContents, sizeof(char), fileSize, fp);

    int lines = 0;
    int linelen = 0;
    int getlinelen = 0;

    for(int i=0; i < fileSize; i++)
    {
        if(fileContents[i] == '\n')
        {
            lines++;
            getlinelen = 1;
        }
        else if(getlinelen != 1)
        {
            linelen++;
        }
    }

    char formatFile[lines][linelen+1];
    int count = 0;
    int l = 0;
    int ll = 0;
    for(int i=0; i < fileSize; i++)
    {
        if(fileContents[i] == '\n')
        {
            formatFile[l][ll] = '\0';
            l++;
            ll = 0;
        }
        else{
            formatFile[l][ll] = fileContents[i];
            ll++;
        }
    }

    int positionx, positiony, hitTrees;
    positionx = positiony = 0;
    hitTrees = 0;

    //Grid looks like this
    //1 2 3 4 5
    //2
    //3
    //4
    //5
    int iteration = 0;
    int rightSlopes[5] = {1, 3, 5, 7, 1};
    int downSlopes[5] = {1, 1, 1, 1, 2};
    long result = 1;
    do {
    //printf("here x=%d\n", rightSlopes[iteration]);
        do {
            positionx += rightSlopes[iteration];
            positiony += downSlopes[iteration];

            //check for overflow, if, then cycle to start of line
            if(positionx >= linelen)//Had just less than, was problem
            {
                positionx = (positionx - linelen);
            }

            if(formatFile[positiony][positionx] == '#')
            {
                hitTrees += 1;
            }
        } while(positiony < lines);

        result *= hitTrees;
        hitTrees = 0;
        positionx = positiony = 0;
        iteration++;

    } while (iteration < 5);

    printf("hittrees: %ld\n", result);

    return 0;
}