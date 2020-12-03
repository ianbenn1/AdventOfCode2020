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

    do {
        //step right 3, down 1;
        positionx += 3;
        positiony += 1;

        //check for overflow, if, then cycle to start of line
        if(positionx >= linelen)//Had just less than, was problem
        {
            positionx = (positionx - linelen);
        }
        
        if(formatFile[positiony][positionx] == '#')
        {
            hitTrees += 1;
        }
    } while(positiony <= lines);

    printf("hittrees: %d\n", hitTrees);

    return 0;
}